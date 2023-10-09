export const serviceCard={
    background: 'rgba( 246, 246, 246, 0.95 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backDropFilter: 'blur( 19px )',
    border:'1px solid rgba( 255, 255, 255, 0.18 )',
    borderTopLeftRadius:'10px',
    borderBottomLeftRadius:'10px',
    width:'100%',
    height:'400px ',
    justifyContent:'space-between',
    alignItems:'center'
    
};
export const imageStyle={
    width:'40%',
    height:'100%',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    borderTopLeftRadius:'10px',
    borderBottomLeftRadius:'10px',
}
export const descriptionStyle={
    width:'55%',
    height:'95%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    marginRight:'2em'
};
export const solidButtonStyle={
    colorScheme:'teal',
    variant:'solid',
    width:'180px',
    height:'45px',
}
export const ghostButtonSyle={
    colorScheme:'teal',
    variant:'ghost',
    width:'180px',
    height:'45px',
};
export const cardAnimation={
    x: 100,
    y:200,
    transition: 'ease: "easeOut", duration: 2 '
};
export const cardVariants={
    visible: { opacity: 1,x:0, transition: { duration: .5 } },
  hidden: { opacity: 0,x:200 }
}