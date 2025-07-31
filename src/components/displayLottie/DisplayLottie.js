import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";
import StyleContext from "../../contexts/StyleContext";

export default class DisplayLottie extends Component {
  static contextType = StyleContext;

  render() {
    const {isDark} = this.context;
    const animationData = this.props.animationData;

    // Clone animation data to avoid mutating the original
    const modifiedAnimationData = JSON.parse(JSON.stringify(animationData));

    // Find and modify background layers
    if (modifiedAnimationData.layers) {
      modifiedAnimationData.layers.forEach(layer => {
        if (layer.ty === 1 && layer.sc) {
          // Solid color layer
          layer.sc = isDark ? "#1a1a1a" : "#ffffff";
        }
      });
    }

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: modifiedAnimationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}
