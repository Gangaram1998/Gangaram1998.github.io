import React from 'react'

const Gototop = () => {
    const goToBtn = () =>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
  return (
    <div className='top-btn smoothHover' onClick={goToBtn}>
       <svg 
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          version="1.2"
          baseProfile="tiny"
          viewBox="0 0 24 24"
          focusable="false"
          className="chakra-icon top_btn_arrow smoothHover"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3.172l-6.414 6.414c-.781.781-.781 2.047 0 2.828s2.047.781 2.828 0l1.586-1.586v7.242c0 1.104.895 2 2 2 1.104 0 2-.896 2-2v-7.242l1.586 1.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-6.414-6.414z"></path>
        </svg>
    </div>
  )
}

export default Gototop

