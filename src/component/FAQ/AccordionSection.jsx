import React from 'react';
import plus from '../../assets/plus-circle.svg'
import minus from '../../assets/minus-circle.svg'

const AccordionSection = ({ section, isActiveSection, setIsActive,sectionIndex }) => {
  const { title, content } = section;
  const toggleSection = () =>{

    const nextSection = isActiveSection ? null : sectionIndex;
    setIsActive(nextSection);
    
  }
  return (
    <div className={`${isActiveSection && "py-6"} py-6 border-b `}>
      <div onClick={toggleSection} className="flex justify-between items-center">
        <div className="text-lg font-bold text-color ">{title}</div>
        <div>
          {isActiveSection ? (
            <button>
              <img src={minus} alt="" />
            </button>
          ) : (
            <button>
              <img src={plus} alt="" />
            </button>
          )}
        </div>
      </div>
      {isActiveSection && (
        <div className="text-gray-500 py-2  max-w-[800px]">{content}</div>
      )}
    </div>
  );
};

export default AccordionSection;