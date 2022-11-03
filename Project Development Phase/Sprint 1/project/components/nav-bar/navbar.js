class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<style>
.nav-items a,
ul {
    color: black;
    text-decoration: none;
    list-style-type: none;
    font-weight: bold;
    margin: 0;
}
.logo-img {
    width:4rem;
    height:4rem;
}

</style>
    <section>
        <div class="row">
            <!-- nav bar -->
            <nav class="col-12 p-md-3">
                <section class="row">
                    <div class="col-10 col-md-3 col-lg-4 fw-bold text-dark fs-4">
                        <img class="logo-img" src="../../assets/logo.png" />
                        New Fashion
                        </div>
                    <div class="col-2 d-md-none align-self-center">
                        <span class="material-symbols-outlined text-dark fw-bold cursor-pointer">
                            menu_open
                        </span>
                    </div>
                    <div class="col-12 col-md-9 col-lg-8 d-none d-md-block">
                        <div class="row">
                            <div class="nav-items col-7 align-self-center">
                                <ul class="d-flex justify-content-around">
                                    <li><a href="">HOME</a></li>
                                    <li><a href="">ABOUT</a></li>
                                    <li><a href="">CART</a></li>
                                    <li><a href="">CONTACT</a></li>
                                </ul>
                            </div>
                            <!-- login btn -->
                            <div class="col-5 row justify-content-around">
                                <button class="col-5 primary-btn">Login</button>
                                <button class="col-5 secondary-btn">Sig up</button>
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
        </div>
    </section>
        `;
  }
}

customElements.define("nav-component", NavBar);
