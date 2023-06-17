export const setIconHelp = (helpIcon, setClassHelpIcon) => {
    if(helpIcon.current.classList.contains('filter-clip')){
      setClassHelpIcon('container-help');
    }else{
      setClassHelpIcon('container-help filter-clip');
    }
  }