// Slide show plugin (please refer to dependencies in package.json: react-swipeable-views )
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styled from "styled-components";

const Header = (props: any) => {
  const EnhancedSwipeableViews = autoPlay(SwipeableViews);
  const Data = props.Data;
  return (
    <AppHeader>
      <SlideWrapp>
        <EnhancedSwipeableViews enableMouseEvents interval={4000}>
          {Data.slides.map((output: any, i: number) => {
            return <AppLogo src={output} alt="Top_Image" key={i} />;
          })}
        </EnhancedSwipeableViews>
      </SlideWrapp>
      <h1>お題でお絵かき づほギャラリー</h1>
    </AppHeader>
  );
};

const AppHeader = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

const AppLogo = styled.img`
  width: 700px;
`;

const SlideWrapp = styled.div`
  width: 700px;
`;

export default Header;
