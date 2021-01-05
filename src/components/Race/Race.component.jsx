import React, { useEffect } from "react";
import "./Race.styles.css";
import useWebAnimations from "@wellyshen/use-web-animations";

const Race = () => {
  const sceneryFrames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];

  const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
  };

  const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
  };

  // --------------------------BACKGROUND 1 & 2----------------------------
  const background1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  // --------------------------FOREGROUND 1 & 2----------------------------
  const foreground1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  });

  const foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  });

  // --------------------------ALICE AND RED-QUEEN----------------------------
  const spriteFrames = [
    { transform: "translateY(0)" },
    { transform: "translateY(-100%)" },
  ];

  const redQueen_alice = useWebAnimations({
    keyframes: spriteFrames,
    timing: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });

  let playbackRate_redQueen = 1;
  let playbackRate_background = 0;

  var adjustBackgroundPlayback = function () {
    if (playbackRate_redQueen < 0.8) {
      playbackRate_background = (playbackRate_redQueen / 2) * -1;
    } else if (playbackRate_redQueen > 1.2) {
      playbackRate_background = playbackRate_redQueen / 2;
    } else {
      playbackRate_background = 0;
    }

    background1Movement.getAnimation().playbackRate = playbackRate_background;
    background2Movement.getAnimation().playbackRate = playbackRate_background;
    foreground1Movement.getAnimation().playbackRate = playbackRate_background;
    foreground2Movement.getAnimation().playbackRate = playbackRate_background;
  };

  useEffect(() => {
    const foreground_animation = foreground1Movement.getAnimation();
    foreground_animation.currentTime =
      foreground_animation.effect.getTiming().duration / 2;

    const background_animation = background1Movement.getAnimation();
    background_animation.currentTime =
      background_animation.effect.getTiming().duration / 2;

    setInterval(() => {
      if (playbackRate_redQueen > 0.4) {
        playbackRate_redQueen *= 0.9;
        redQueen_alice.getAnimation().playbackRate = playbackRate_redQueen;
      }
      adjustBackgroundPlayback();
    }, 3000);

    document.addEventListener("click", () => {
      playbackRate_redQueen *= 1.1;
      redQueen_alice.getAnimation().playbackRate = playbackRate_redQueen;
      adjustBackgroundPlayback();
    });
  });

  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img
            id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
            alt="Alice and the Red Queen running to stay in place."
            ref={redQueen_alice.ref}
          />
        </div>
      </div>

      <div className="scenery" id="foreground1" ref={foreground1Movement.ref}>
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
          alt=" "
        />
      </div>

      <div className="scenery" id="foreground2" ref={foreground2Movement.ref}>
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
          alt=" "
        />
        <img
          id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
          alt=" "
        />
      </div>

      <div className="scenery" id="background1" ref={background1Movement.ref}>
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
          alt=" "
        />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
          alt=" "
        />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
          alt=" "
        />
      </div>

      <div className="scenery" id="background2" ref={background2Movement.ref}>
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
          alt=" "
        />
        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
          alt=" "
        />
        <img
          id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
          alt=" "
        />
      </div>
    </div>
  );
};

export default Race;
