 @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  color: #222;
  padding-bottom: 50px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  position: fixed;
  background-color: #040403;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}

.nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
}

.nav ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
}

.nav a {
  color: #fff;
  text-decoration: none;
  padding: 7px 15px;
  transition: all 0.3s ease-in-out;
}

.nav.active {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.nav.active a {
  color: #000;
}

.nav.active .container {
  padding: 10px 0;
}

.nav a.current,
.nav a:hover {
  color: #c0392b;
  font-weight: bold;
}

.hero {
  background-image: url("https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  z-index: -2;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1;
}

.hero h1 {
  font-size: 41px;
  margin: -20px 0 20px;
}

.hero p {
  font-size: 20px;
  letter-spacing: 1px;
}

.content h2,
.content h3 {
  font-size: 150%;
  margin: 20px 0;
}

.content p {
  color: #555;
  line-height: 30px;
  letter-spacing: 1.2px;
}