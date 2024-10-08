import ArticleLevels from "../components/sidebar/ArticleLevels";
import Contents from "../components/sidebar/Contents";
import Options from "../components/article/Options";
import Title from "../components/article/Title";
import Tools from "../components/sidebar/Tools";
import Overview from "../components/article/Overview";
import Senses from "../components/article/Senses";
import Behavior from "../components/article/Behavior";
import SeeAlso from "../components/article/SeeAlso";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="w-full flex flex-col flex-col-reverse lg:flex-row gap-6 lg:gap-12">
          <div
            id="left-sidebar"
            className="grow min-w-full lg:min-w-0 lg:w-1/5 max-w-64 flex flex-col gap-6 lg:mt-7"
          >
            <Contents />
            <ArticleLevels />
          </div>
          <main className="grow min-w-full lg:min-w-0 lg:w-1/2">
            <Title>Cat</Title>
            <Options />
            <div className="flex flex-col gap-6 lg:gap-12 select-text">
              <Overview />
              <Senses />
              <Behavior />
              <SeeAlso />
            </div>
          </main>
          <div
            id="right-sidebar"
            className="grow min-w-full lg:min-w-0 lg:w-1/5 max-w-64 lg:mt-7"
          >
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
}
