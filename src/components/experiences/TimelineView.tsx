import "./TimelineView.scss";
import Timeline from "./Timeline";
import { useRef, useEffect, LegacyRef, MutableRefObject, useState, useLayoutEffect } from "react";
import moonImage from './components/moons.jpeg';
import { ExperiencesViewContextProvider } from "./ExperiencesViewContextProvider";

export type Rect = {
    x: number;
    y: number;
    width: number;
    height: number;
}

// TODO
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

export default function TimelineView({
}: {
}) {

    const ref = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(800);
    const [windowWidth, windowHeight] = useWindowSize();

    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }
        setWidth(ref.current.offsetWidth)
        console.log('width', ref.current ? ref.current.offsetWidth : 0);
    }, [windowWidth]);

    return (
        <ExperiencesViewContextProvider>
            <div className="timeline-wrapper">
                <div ref={ref} className="timeline-view">
                    <img src={moonImage} alt="Moons" width={width} />
                    <Timeline height={120} width={width} />
                </div>
            </div>
        </ExperiencesViewContextProvider>
    );
}
