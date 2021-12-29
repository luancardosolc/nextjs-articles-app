import headerStyles from '../styles/Header.module.css';

const Header = () => {
  // Dynamic variables being passed to css exemple
  // const x = 1;

  return (
    <div>
      {/* Dynamic variables being passed to css exemple */}
      {/* <h1 className='title'> */}
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>The best web dev news</p>
      {/* Dynamic variables being passed to css exemple */}
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  )
}

export default Header
