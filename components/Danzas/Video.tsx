import { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ onMute }: { onMute: boolean }) => {
  //@ts-ignore
  const [player, setPlayer] = useState<YT.Player | null>(null);
  const videoId = "6THw0hxK_Z8";

  useEffect(() => {
    // Cargar la API de YouTube
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    // Crear el reproductor de YouTube una vez que la API esté lista
    //@ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      //@ts-ignore
      const newPlayer = new window.YT.Player("youtube-player", {
        height: "100%",
        width: "100%",
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          playlist: videoId,
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
          },
        },
      });
    };
  }, []);

  /* const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  }; */

  useEffect(() => {
    if (onMute) {
      if (player) {
        player.mute();
      }
    } else {
      if (player) {
        player.unMute();
      }
    }
  }, [onMute]);

  return (
    <div className="w-full h-full">
      <div id="youtube-player" style={{ width: "100%", height: "100%" }} />
      {/* <button
        className="bg-white z-50 absolute bottom-10 left-20"
        onClick={toggleMute}
      >
        {isMuted ? "Unmute" : "Mute"}
      </button> */}
    </div>
  );
};

export default VideoPlayer;
