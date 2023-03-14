import classes from './Layout.module.css';
import Nav from './Nav';

function Layout(props) {
    return <div>
      <Nav/>
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
}

export default Layout;