import { forwardRef, useState } from 'react'
import css from './Video.module.css'

interface VideoProps {
  typeConnection: 'local' | 'remote'
  userName: string
  listAttributes?: { autoPlay?: boolean; muted?: boolean; controls?: boolean }
  hiddenVideo?: boolean
  focusVideo?: 'local' | 'remote'
  setFocusVideo?: React.Dispatch<React.SetStateAction<'local' | 'remote'>>
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      userName,
      typeConnection,
      listAttributes,
      hiddenVideo,
      focusVideo,
      setFocusVideo,
    }: VideoProps,
    ref
  ) => {
    function changeCallFocus() {
      if (!setFocusVideo || !focusVideo) return
      setFocusVideo(prev => (prev === 'local' ? 'remote' : 'local'))
    }

    return (
      <div
        className={`${css.call} ${
          typeConnection === focusVideo ? css.callFocus : css.callNotFocus
        }`}
        onDoubleClick={changeCallFocus}
      >
        <div className={css.img} ></div>
        <video
          ref={ref}
          className={css.video}
          {...listAttributes}
          style={hiddenVideo ? { display: 'none' } : undefined}
        ></video>
        <p className={`${css.name} ${hiddenVideo ? css.nameCenter : ''} `}>
          {' '}
          {userName}
        </p>
      </div>
    )
  }
)
