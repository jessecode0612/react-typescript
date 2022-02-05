/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import theme from '../styles/theme'
import { useEffect, useState } from 'react'
import { Process, RecordButton, Spectrum, useSsAudioClient } from './Audio'
import { PauseIcon, PlayOutlineIcon } from "./Icons"

const MAX_RECORD_TIME_SCRIPT = 15

export default function Record() {
  const audioClient = useSsAudioClient()
  const [spectrumSource, setSpectrumSource] = useState<'microphone' | 'audio'>(
    'microphone'
  )

  useEffect(() => {
    audioClient.setRecordTime(MAX_RECORD_TIME_SCRIPT)
  }, [audioClient])


  const handleRecordButtonClick = async () => {
    console.log('ppp')
    if (audioClient.recording) {
      audioClient.stopProcess()
    } else {
      setSpectrumSource('microphone')
      await audioClient.startProcess()
    }
  }

  const handlePreviewClick = () => {
    if (!audioClient.recording && audioClient.source) {
      setSpectrumSource('audio')
      audioClient.toggle()
    }
  }

  return (
    <div className="container" css={styles}>
      <div className="contribution-outline flex-column flex-center">
        <div className="contribution-body flex-center">
          <h3>Say something, after clicking record button</h3>
        </div>
        <Process
          duration={audioClient.recordTime * 1000}
          playing={audioClient.recording || audioClient.playing}
          paused={audioClient.paused}
        />
        <hr style={{width:'100%', height: 1, backgroundColor:'#00000012', border: 'none'}} />
        <div className="contribute-footer">
          <div className="w-100 flex-center">
            <RecordButton
              onClick={handleRecordButtonClick}
              recording={audioClient.recording}
            />
            <div className="spectrum-container">
              <div
                className="btn-play"
                onClick={handlePreviewClick}
                data-disabled={audioClient.recording || !audioClient.encoded}
              >
                {audioClient.playing ? <PauseIcon /> : <PlayOutlineIcon />}
              </div>
              <Spectrum
                className="w-100"
                record={audioClient.recording || audioClient.playing}
                height={40}
                source={spectrumSource}
                audioElem={audioClient.audioElm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = css`
  .contribution-outline {
    border: ${theme.styles.border};
    border-radius: ${theme.styles.borderRadius};
    width: 100%;
    overflow: hidden;
  }

  .contribution-header {
    text-align: center;
    background-color: ${theme.colors.secondary};
    width: 100%;
    border-bottom: ${theme.styles.border};
    height: 40px;
  }

  .contribution-body {
    width: 100%;
    padding: 40px;

    h3 {
      margin-bottom: 0;
    }

    ${theme.MOBILE_MEDIA_QUERY} {
      padding: 40px 15px;
    }
  }

  .more-info {
    border: ${theme.styles.border};
  }

  .contribute-footer {
    width: 100%;
    padding: 7px 0 10px 0;

    ${theme.MOBILE_MEDIA_QUERY} {
      padding-bottom: 0;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .btn-skip {
      color: ${theme.colors.primary};
      cursor: pointer;

      &[data-disabled='true'] {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }

    .spectrum-container {
      width: calc(100% - 200px);
      border-radius: ${theme.styles.borderRadius};
      overflow: hidden;
      padding: 1px 10px;
      border: ${theme.styles.border};
      background-color: ${theme.colors.secondary};
      display: flex;
      align-items: center;

      ${theme.MOBILE_MEDIA_QUERY} {
        border-radius: 0;
        width: 100%;
        margin-top: 10px;
        border-style: none;
        border-top: ${theme.styles.border};
      }

      .btn-play {
        display: flex;
        align-items: center;
        pointer-events: auto;
        margin-right: 10px;
        cursor: pointer!important;

        &[data-disabled='true'] {
          opacity: 0.3;
          pointer-events: none;
        }

        .icon {
          width: 24px;
          height: 24px;
        }
      }

      .icon {
        margin-right: 10px;
        fill: ${theme.colors.primary};
        cursor: pointer;
      }
    }
  }
`
