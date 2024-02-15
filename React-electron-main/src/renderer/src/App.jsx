import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import Login from './components/Login/Login'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const ipcHandle1 = () =>window.electron.ipcRenderer.on('success', (event,arg)=> {
    console.log(arg.data)
    console.log("worksssss")
  })
  return (
    <>
      {/* <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div> */}
      {/* <Versions></Versions> */}
      <Login ipcHandle={ipcHandle} ipcHandle1={ipcHandle1}/>
    </>
  )
}

export default App
