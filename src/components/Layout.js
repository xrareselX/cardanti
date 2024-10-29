import Navigation from './Navigation';

function Layout(props) {
    return <div>
      <Navigation user={props.user} handleLogout={props.handleLogout}/>
      <main>
        {props.children}
      </main>
    </div>
}

export default Layout;