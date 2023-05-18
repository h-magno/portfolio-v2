/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react'

import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp'
import { useWindowSize } from 'react-use'

const usePlayerState = (videoPlayerRef: any) => {
  const [playerState, setPlayerState] = useState({
    playing: true,
    muted: true,
    percentage: 0.0,
    volume: 25,
  })

  useEffect(() => {
    playerState.playing ? videoPlayerRef.current.play() : videoPlayerRef.current.pause()
  }, [playerState.playing, videoPlayerRef])

  const toggleVideoPlay = () => {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    })
  }

  const handleTimeUpdate = () => {
    const currentPercentage = (videoPlayerRef.current.currentTime / videoPlayerRef.current.duration) * 100
    setPlayerState({
      ...playerState,
      percentage: currentPercentage,
    })
  }

  const handleChangerVideoPercentage = (event: any) => {
    const currentPercentageValue = event.target.value

    videoPlayerRef.current.currentTime = (videoPlayerRef.current.duration / 100) * currentPercentageValue

    setPlayerState({
      ...playerState,
      percentage: currentPercentageValue,
    })
  }

  const handleMute = () => {
    setPlayerState({
      ...playerState,
      muted: !playerState.muted,
    })
  }

  const handleChangerVolumePercentage = (event: any) => {
    const currentVolumeValue = event.target.value

    videoPlayerRef.current.volume = currentVolumeValue / 100

    setPlayerState({
      ...playerState,
      volume: currentVolumeValue,
    })
  }

  return {
    playerState,
    handleMute,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangerVideoPercentage,
    handleChangerVolumePercentage,
  }
}

const HomeVideo = () => {
  const { width: screenWidth } = useWindowSize()

  const videoPlayerRef = useRef<any>(null)
  const {
    playerState, handleMute, toggleVideoPlay, handleTimeUpdate, handleChangerVideoPercentage, handleChangerVolumePercentage,
  } = usePlayerState(videoPlayerRef)
  const [playbackRate, setPlaybackRate] = useState(1)

  useEffect(() => {
    videoPlayerRef.current.playbackRate = playbackRate
  }, [playbackRate])

  const handlePlaybackRateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPlaybackRate = parseFloat(event.target.value)
    setPlaybackRate(newPlaybackRate)
  }

  return (
    <div className='w-full videoWrapper aspect-video rounded-3xl'>
      <video
        loop
        autoPlay
        muted={playerState.muted}
        ref={videoPlayerRef}
        src='homeVideo.mp4'
        onTimeUpdate={handleTimeUpdate}
        onClick={toggleVideoPlay}
        className='w-full h-full rounded-t-3xl'
      >
        <track kind='captions' />
      </video>

      <div className='controls flex h-14 items-center rounded-b-3xl bg-[#615ac015]  dark:bg-[#0819416c] backdrop-blur-sm'>
        <button type='button' className='w-1/5 h-full rounded-bl-3xl' onClick={toggleVideoPlay}>
          {playerState.playing ? <PauseIcon className='text-black dark:text-white' /> : <PlayArrowSharpIcon className='text-black dark:text-white' />}
        </button>
        <div className='flex items-center w-1/5 sm:w-2/5 h-full volume'>
          <button type='button' onClick={handleMute} className='flex items-center w-1/5 h-full mr-1'>
            {playerState.muted ? <VolumeOffIcon /> : <VolumeUpSharpIcon />}
          </button>

          <input
            onChange={handleChangerVolumePercentage}
            type='range'
            min='0'
            max='100'
            value={playerState.volume}
            className='w-3/5 bg-gray-300 dark:bg-blue-800 range range-info dark:range-success range-xs'
          />
        </div>

        <input
          onChange={handleChangerVideoPercentage}
          type='range'
          min='0'
          max='100'
          value={playerState.percentage}
          className='w-3/5 bg-gray-300 dark:bg-blue-800 range range-info dark:range-success range-xs'
        />

        <div className='w-1/5 px-5 sm:px-2 text-gray-900 f'>
          <select className='w-full text-center rounded-xl' onChange={handlePlaybackRateChange} value={playbackRate}>
            {[1, 1.5, 2].map((speed: number) => (
              <option key={`speedChange_${ speed }`} value={speed}>
                x{speed}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default HomeVideo
