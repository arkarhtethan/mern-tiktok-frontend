import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          description="Wow EPic mern stack tiktok clone"
          song={"99 problems but react aint one"}
          channel="km"
          likes={111}
          shares={222}
          messages={144}
          url={
            "https://v16-webapp.tiktok.com/86d4002d99483562809a32697d1a310f/6224893e/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e81d32c3020c4d22a40e204ae3851f93/?a=1988&br=1928&bt=964&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3C~nz7ThBOJQDXq&l=202203060413050102451442002364BA08&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anJncWQ6ZmZrOzMzZjgzM0ApOGQ0O2c8NWU1N2RoNDhnOWdeMWJfcjQwbmVgLS1kL2Nzc2FgYmJgYl9fNTQwNjYxXi86Yw%3D%3D&vl=&vr="
          }
        />
        <Video
          description="Wow EPic mern stack tiktok clone"
          song={"99 problems but react aint one"}
          channel="km"
          likes={111}
          shares={222}
          messages={144}
          url={
            "https://v16-webapp.tiktok.com/86d4002d99483562809a32697d1a310f/6224893e/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e81d32c3020c4d22a40e204ae3851f93/?a=1988&br=1928&bt=964&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3C~nz7ThBOJQDXq&l=202203060413050102451442002364BA08&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anJncWQ6ZmZrOzMzZjgzM0ApOGQ0O2c8NWU1N2RoNDhnOWdeMWJfcjQwbmVgLS1kL2Nzc2FgYmJgYl9fNTQwNjYxXi86Yw%3D%3D&vl=&vr="
          }
        />
      </div>
    </div>
  );
}

export default App;
