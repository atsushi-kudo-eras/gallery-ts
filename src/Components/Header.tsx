// Slide show plugin (please refer to dependencies in package.json: react-swipeable-views )
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const Header = (props: any) => {
  const EnhancedSwipeableViews = autoPlay(SwipeableViews);
  const Data = props.Data;
  return (
    <header className="App-header">
      <div className="slide-wrap">
        <EnhancedSwipeableViews enableMouseEvents interval={4000}>
          {Data.slides.map((output: any, i: number) => {
            return (
              <img src={output} className="App-logo" alt="Top_Image" key={i} />
            );
          })}
        </EnhancedSwipeableViews>
      </div>
      <h1>お題でお絵かき づほギャラリー</h1>
    </header>
  );
};

export default Header;
