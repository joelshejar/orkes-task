import React,{ useEffect, useState, useRef } from "react";

const InfiniteScroll = ({
  handlerFunc,
  isLazyLoading = "list-item",
}: {
  handlerFunc: () => void;
  isLazyLoading: string;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<any>();

  useEffect(() => {
    if (isVisible) {
      handlerFunc();
    }
  }, [isVisible]);

  useEffect(() => {
    if (!elementRef) return;
    const observer = new IntersectionObserver(onVisibilityChange);
    observer.observe(elementRef.current);

    return () => observer.unobserve(elementRef.current);
  }, [elementRef]);

  const onVisibilityChange = (entries) =>
    setIsVisible(entries[0].isIntersecting);

  return <div ref={elementRef} className={isLazyLoading}></div>;
};

export default InfiniteScroll;