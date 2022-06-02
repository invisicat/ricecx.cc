import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';

type PageArrowProps = {
  /**
   * The Id of the element to scroll to
   */
  clickToId: string;

  /**
   * The offset in pixels from the top of the page to the target element.
   */
  offset?: number;
};

const PageArrow: React.FC<PageArrowProps> = props => {
  const handleClick = () => {
    const element = document.getElementById(props.clickToId);
    if (!element) {
      console.error(
        'PageArrow >> Element with id: ' + props.clickToId + ' not found'
      );
      return;
    }

    window.scrollTo({
      top: !!props.offset
        ? element.scrollHeight + props.offset
        : element.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleClick}>
      <BsArrowDownShort
        size={52}
        className="align-bottom rounded-full animate-bounce hover:cursor-pointer text-black dark:text-white hover:bg-black hover:bg-opacity-10"
      />
    </button>
  );
};

export default PageArrow;
