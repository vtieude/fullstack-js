import classes from './PageContent.module.css';

function PageContent({ title, children }) {
  return (
    <div classtitle={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
