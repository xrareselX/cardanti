import Nav from './Nav';

function Layout(props) {
    return <div>
      <Nav/>
      <main>
        {props.children}
      </main>
    </div>
}

export default Layout;