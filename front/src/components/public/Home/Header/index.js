import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  require("../index.css")
  return (
    <header id="header">
      <div className="header-container">
        <div className="header-banner">
          <div className="container">
            <div className="inner" />
          </div>
        </div>
        <nav className="header-nav">
          <div className="topnav">
            <div className="container">
              <div className="inner" />
            </div>
          </div>
          <div className="bottomnav">
            <div className="container">
              <div className="inner" />
            </div>
          </div>
        </nav>
        <div className="header-top">
          <div className="inner">
            {/* @file modules\appagebuilder\views\templates\hook\ApRow */}
            <div
              className="row box-top h7-boxtop ApRow has-bg bg-boxed"
              data-bg=" no-repeat"
              style={{ background: "no-repeat" }}
            >
              {/* @file modules\appagebuilder\views\templates\hook\ApColumn */}
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-6 col-sp-6 ApColumn">
                {/* @file modules\appagebuilder\views\templates\hook\ApModule */}
                {/* Block search module */}
                <div
                  id="leo_search_block_top"
                  className="block exclusive search-by-category"
                >
                  <h4 className="title_block">Search</h4>
                  <form
                    method="get"
                    action="https://apollotran.com/demo/at_auros/en/index.php?controller=productsearch"
                    id="leosearchtopbox"
                  >
                    <input type="hidden" name="fc" defaultValue="module" />
                    <input
                      type="hidden"
                      name="module"
                      defaultValue="leoproductsearch"
                    />
                    <input
                      type="hidden"
                      name="controller"
                      defaultValue="productsearch"
                    />
                    <input
                      type="hidden"
                      name="leoproductsearch_static_token"
                      defaultValue="7cd2735f463976418f4dc4ee2e571943"
                    />
                    <label>Search products:</label>
                    <div className="block_content clearfix leoproductsearch-content">
                      <div className="list-cate-wrapper">
                        <input
                          id="leosearchtop-cate-id"
                          name="cate"
                          defaultValue=""
                          type="hidden"
                        />
                        <a
                          id="dropdownListCateTop"
                          className="select-title"
                          rel="nofollow"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>All Categories</span>
                          <i className="material-icons pull-xs-right">
                            keyboard_arrow_down
                          </i>
                        </a>
                        <div
                          className="list-cate dropdown-menu"
                          aria-labelledby="dropdownListCateTop"
                        >
                          <a
                            href="#"
                            data-cate-id=""
                            data-cate-name="All Categories"
                            className="cate-item active"
                          >
                            All Categories
                          </a>
                          <a
                            href="#"
                            data-cate-id={2}
                            data-cate-name="Home"
                            className="cate-item cate-level-1"
                          >
                            Home
                          </a>
                          <a
                            href="#"
                            data-cate-id={3}
                            data-cate-name="Stools"
                            className="cate-item cate-level-2"
                          >
                            --Stools
                          </a>
                          <a
                            href="#"
                            data-cate-id={4}
                            data-cate-name="Men"
                            className="cate-item cate-level-3"
                          >
                            ---Men
                          </a>
                          <a
                            href="#"
                            data-cate-id={5}
                            data-cate-name="Women"
                            className="cate-item cate-level-3"
                          >
                            ---Women
                          </a>
                          <a
                            href="#"
                            data-cate-id={6}
                            data-cate-name="Sofas"
                            className="cate-item cate-level-2"
                          >
                            --Sofas
                          </a>
                          <a
                            href="#"
                            data-cate-id={7}
                            data-cate-name="Stationery"
                            className="cate-item cate-level-3"
                          >
                            ---Stationery
                          </a>
                          <a
                            href="#"
                            data-cate-id={8}
                            data-cate-name="Home Accessories"
                            className="cate-item cate-level-3"
                          >
                            ---Home Accessories
                          </a>
                          <a
                            href="#"
                            data-cate-id={9}
                            data-cate-name="Furnitures"
                            className="cate-item cate-level-2"
                          >
                            --Furnitures
                          </a>
                          <a
                            href="#"
                            data-cate-id={10}
                            data-cate-name="Chairs"
                            className="cate-item cate-level-2"
                          >
                            --Chairs
                          </a>
                          <a
                            href="#"
                            data-cate-id={11}
                            data-cate-name="Lighting"
                            className="cate-item cate-level-2"
                          >
                            --Lighting
                          </a>
                          <a
                            href="#"
                            data-cate-id={12}
                            data-cate-name="Decor"
                            className="cate-item cate-level-2"
                          >
                            --Decor
                          </a>
                          <a
                            href="#"
                            data-cate-id={13}
                            data-cate-name="Ottoman Collections"
                            className="cate-item cate-level-2"
                          >
                            --Ottoman Collections
                          </a>
                          <a
                            href="#"
                            data-cate-id={14}
                            data-cate-name="Lamp Collections"
                            className="cate-item cate-level-2"
                          >
                            --Lamp Collections
                          </a>
                          <a
                            href="#"
                            data-cate-id={15}
                            data-cate-name="Sideboard Collections"
                            className="cate-item cate-level-2"
                          >
                            --Sideboard Collections
                          </a>
                          <a
                            href="#"
                            data-cate-id={16}
                            data-cate-name="Lamps"
                            className="cate-item cate-level-2"
                          >
                            --Lamps
                          </a>
                          <a
                            href="#"
                            data-cate-id={17}
                            data-cate-name="Speakers"
                            className="cate-item cate-level-2"
                          >
                            --Speakers
                          </a>
                          <a
                            href="#"
                            data-cate-id={18}
                            data-cate-name="Bottles"
                            className="cate-item cate-level-2"
                          >
                            --Bottles
                          </a>
                        </div>
                      </div>
                      <div className="leoproductsearch-result">
                        <div className="leoproductsearch-loading cssload-speeding-wheel" />
                        <input
                          className="search_query form-control grey"
                          type="text"
                          id="leo_search_query_top"
                          name="search_query"
                          defaultValue=""
                          placeholder="Search"
                        />
                      </div>
                      <button
                        type="submit"
                        id="leo_search_top_button"
                        className="btn btn-default button button-small"
                      >
                        <span>
                          <i className="material-icons search">search</i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* /Block search module */}
              </div>
              {/* @file modules\appagebuilder\views\templates\hook\ApColumn */}
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 col-sp-12 ApColumn">
                {/* @file modules\appagebuilder\views\templates\hook\ApGenCode */}
                <div className="h7-wrlogo">
                  <a href="https://apollotran.com/demo/at_auros/">
                    <img
                      className="logo img-fluid"
                      src="https://apollotran.com/demo/at_auros/img/at-auros-logo-1557240632.jpg"
                      alt="Logo"
                    />
                  </a>
                </div>
                {/* @file modules\appagebuilder\views\templates\hook\ApSlideShow */}
                <div
                  id="memgamenu-form_7482601178841806"
                  className="ApMegamenu"
                >
                  <nav
                    data-megamenu-id={7482601178841806}
                    className="leo-megamenu cavas_menu navbar navbar-default enable-canvas"
                    role="navigation"
                  >
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggler hidden-lg-up"
                        data-toggle="collapse"
                        data-target=".megamenu-off-canvas-7482601178841806"
                      >
                        <span className="sr-only">Toggle navigation</span>☰
                        {/*
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					*/}
                      </button>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="leo-top-menu collapse navbar-toggleable-md megamenu-off-canvas megamenu-off-canvas-7482601178841806">
                      <ul className="nav navbar-nav megamenu horizontal">
                        <li className="nav-item parent dropdown aligned-fullwidth">
                          <a
                            href=""
                            className="nav-link has-category"
                            data-toggle="dropdown"
                            target="_self"
                          >
                            <span className="menu-title">Productos</span>
                          </a>
                          <b className="caret" />
                          {/* Poner productos por categorias */}
                          <div className="dropdown-sub dropdown-menu">
                            <div className="dropdown-menu-inner">
                              <div className="row">
                                <div className="mega-col col-md-4">
                                  <div className="mega-col-inner">
                                    <div
                                      className="leo-widget"
                                      data-id_widget={1562899973}
                                    >
                                      <div className="widget-products">
                                        <div className="menu-title">
                                          Categoria 1
                                        </div>
                                        <div className="widget-inner">
                                          <div className="product-block">
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={1}
                                              data-id-product-attribute={1}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/24-small_default/hummingbird-printed-t-shirt.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/24-large_default/hummingbird-printed-t-shirt.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white">
                                                        Teapot
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span className="regular-price">
                                                        $23.90
                                                      </span>
                                                      <span className="discount-percentage">
                                                        -10%
                                                      </span>
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content="21.51"
                                                        >
                                                          $21.51
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={2}
                                              data-id-product-attribute={0}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/women/2-brown-bear-printed-sweater.html"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/29-small_default/brown-bear-printed-sweater.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/29-large_default/brown-bear-printed-sweater.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/women/2-brown-bear-printed-sweater.html">
                                                        Miro Dining Table
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content="35.9"
                                                        >
                                                          $35.90
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={3}
                                              data-id-product-attribute={13}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/home/3-13-the-best-is-yet-to-come-framed-poster.html#/19-dimension-40x60cm"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/35-small_default/the-best-is-yet-to-come-framed-poster.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/35-large_default/the-best-is-yet-to-come-framed-poster.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/home/3-13-the-best-is-yet-to-come-framed-poster.html#/19-dimension-40x60cm">
                                                        Janus Table Lamp
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content={29}
                                                        >
                                                          $29.00
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mega-col col-md-4">
                                  <div className="mega-col-inner">
                                    <div
                                      className="leo-widget"
                                      data-id_widget={1562900148}
                                    >
                                      <div className="widget-products">
                                        <div className="menu-title">
                                          Categoria 2
                                        </div>
                                        <div className="widget-inner">
                                          <div className="product-block">
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={1}
                                              data-id-product-attribute={1}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/24-small_default/hummingbird-printed-t-shirt.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/24-large_default/hummingbird-printed-t-shirt.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white">
                                                        Teapot
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span className="regular-price">
                                                        $23.90
                                                      </span>
                                                      <span className="discount-percentage">
                                                        -10%
                                                      </span>
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content="21.51"
                                                        >
                                                          $21.51
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={2}
                                              data-id-product-attribute={0}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/women/2-brown-bear-printed-sweater.html"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/29-small_default/brown-bear-printed-sweater.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/29-large_default/brown-bear-printed-sweater.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/women/2-brown-bear-printed-sweater.html">
                                                        Miro Dining Table
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content="35.9"
                                                        >
                                                          $35.90
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={3}
                                              data-id-product-attribute={13}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/home/3-13-the-best-is-yet-to-come-framed-poster.html#/19-dimension-40x60cm"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/35-small_default/the-best-is-yet-to-come-framed-poster.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/35-large_default/the-best-is-yet-to-come-framed-poster.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/home/3-13-the-best-is-yet-to-come-framed-poster.html#/19-dimension-40x60cm">
                                                        Janus Table Lamp
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content={29}
                                                        >
                                                          $29.00
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mega-col col-md-4">
                                  <div className="mega-col-inner">
                                    <div
                                      className="leo-widget"
                                      data-id_widget={1562900238}
                                    >
                                      <div className="widget-products">
                                        <div className="menu-title">
                                          Categoria 3
                                        </div>
                                        <div className="widget-inner">
                                          <div className="product-block">
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={1}
                                              data-id-product-attribute={1}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/24-small_default/hummingbird-printed-t-shirt.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/24-large_default/hummingbird-printed-t-shirt.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white">
                                                        Teapot
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span className="regular-price">
                                                        $23.90
                                                      </span>
                                                      <span className="discount-percentage">
                                                        -10%
                                                      </span>
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content="21.51"
                                                        >
                                                          $21.51
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={2}
                                              data-id-product-attribute={0}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/women/2-brown-bear-printed-sweater.html"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/29-small_default/brown-bear-printed-sweater.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/29-large_default/brown-bear-printed-sweater.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/women/2-brown-bear-printed-sweater.html">
                                                        Miro Dining Table
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content="35.9"
                                                        >
                                                          $35.90
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="product-miniature js-product-miniature"
                                              data-id-product={3}
                                              data-id-product-attribute={13}
                                              itemScope=""
                                              itemType="http://schema.org/Product"
                                            >
                                              <div className="thumbnail-container clearfix">
                                                <div className="product-image">
                                                  <a
                                                    href="https://apollotran.com/demo/at_auros/en/home/3-13-the-best-is-yet-to-come-framed-poster.html#/19-dimension-40x60cm"
                                                    className="thumbnail product-thumbnail"
                                                  >
                                                    <img
                                                      className="img-fluid"
                                                      src="https://apollotran.b-cdn.net/demo/at_auros/35-small_default/the-best-is-yet-to-come-framed-poster.jpg"
                                                      alt=""
                                                      data-full-size-image-url="https://apollotran.b-cdn.net/demo/at_auros/35-large_default/the-best-is-yet-to-come-framed-poster.jpg"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="product-meta">
                                                  <div className="product-description">
                                                    <h4
                                                      className="h3 product-title"
                                                      itemProp="name"
                                                    >
                                                      <a href="https://apollotran.com/demo/at_auros/en/home/3-13-the-best-is-yet-to-come-framed-poster.html#/19-dimension-40x60cm">
                                                        Janus Table Lamp
                                                      </a>
                                                    </h4>
                                                    <div className="product-price-and-shipping">
                                                      <span
                                                        className="price"
                                                        itemProp="offers"
                                                        itemScope=""
                                                        itemType="http://schema.org/Offer"
                                                      >
                                                        <span
                                                          itemProp="priceCurrency"
                                                          content="USD"
                                                        />
                                                        <span
                                                          itemProp="price"
                                                          content={29}
                                                        >
                                                          $29.00
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item parent dropdown aligned-fullwidth"></li>
                        <li className="nav-item parent dropdown aligned-fullwidth"></li>

                        <li className="nav-item icon-new item-product-layout parent dropdown aligned-fullwidth">
                          {/* class="  " */}
                          <a target="_self" className="nav-link has-category">
                            <span className="menu-title">Contacto</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              {/* @file modules\appagebuilder\views\templates\hook\ApColumn */}
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-6 col-sp-6 ApColumn">
                {/* @file modules\appagebuilder\views\templates\hook\ApModule */}
                <div id="_desktop_cart">
                  <div
                    className="blockcart cart-preview inactive"
                    data-refresh-url="//apollotran.com/demo/at_auros/en/module/ps_shoppingcart/ajax"
                  >
                    <div className="header">
                      <i className="icon-Ico_Cart" />
                      <span className="cart-products-count">0</span>
                    </div>
                  </div>
                </div>
                {/* @file modules\appagebuilder\views\templates\hook\ApModule */}
                {/* Block languages module */}
                <div
                  id="leo_block_top"
                  className="popup-over e-scale float-md-right"
                >
                  <a
                    href="javascript:void(0)"
                    data-toggle="dropdown"
                    className="popup-title"
                  >
                    <AiOutlineUser />
                  </a>
                  <div className="popup-content">
                    <div className="row">
                      <div className="col-xs-6">
                        <div className="language-selector">
                          <span>Language:</span>
                          <ul className="link">
                            <li className="current">
                              <a
                                href="https://apollotran.com/demo/at_auros/en/module/appagebuilder/appagebuilderhome"
                                className="dropdown-item"
                              >
                                <img
                                  src="/demo/at_auros/img/l/1.jpg"
                                  alt="English"
                                  width={16}
                                  height={11}
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://apollotran.com/demo/at_auros/fr/module/appagebuilder/appagebuilderhome"
                                className="dropdown-item"
                              >
                                <img
                                  src="/demo/at_auros/img/l/2.jpg"
                                  alt="Français"
                                  width={16}
                                  height={11}
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://apollotran.com/demo/at_auros/de/module/appagebuilder/appagebuilderhome"
                                className="dropdown-item"
                              >
                                <img
                                  src="/demo/at_auros/img/l/3.jpg"
                                  alt="Deutsch"
                                  width={16}
                                  height={11}
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://apollotran.com/demo/at_auros/it/module/appagebuilder/appagebuilderhome"
                                className="dropdown-item"
                              >
                                <img
                                  src="/demo/at_auros/img/l/4.jpg"
                                  alt="Italiano"
                                  width={16}
                                  height={11}
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://apollotran.com/demo/at_auros/es/module/appagebuilder/appagebuilderhome"
                                className="dropdown-item"
                              >
                                <img
                                  src="/demo/at_auros/img/l/5.jpg"
                                  alt="Español"
                                  width={16}
                                  height={11}
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://apollotran.com/demo/at_auros/ar/module/appagebuilder/appagebuilderhome"
                                className="dropdown-item"
                              >
                                <img
                                  src="/demo/at_auros/img/l/6.jpg"
                                  alt="اللغة العربية"
                                  width={16}
                                  height={11}
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="currency-selector">
                          <span>Currency:</span>
                          <ul className="link">
                            <li>
                              <a
                                title="Euro"
                                rel="nofollow"
                                href="https://apollotran.com/demo/at_auros/en/module/appagebuilder/appagebuilderhome?SubmitCurrency=1&id_currency=2"
                                className="dropdown-item"
                              >
                                EUR
                              </a>
                            </li>
                            <li className="current">
                              <a
                                title="US Dollar"
                                rel="nofollow"
                                href="https://apollotran.com/demo/at_auros/en/module/appagebuilder/appagebuilderhome?SubmitCurrency=1&id_currency=1"
                                className="dropdown-item"
                              >
                                USD
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="useinfo-selector">
                          <ul className="user-info">
                            <li>
                              <a
                                className="signin leo-quicklogin"
                                data-enable-sociallogin="enable"
                                data-type="popup"
                                data-layout="login"
                                href="javascript:void(0)"
                                title="Log in to your customer account"
                                rel="nofollow"
                              >
                                <i className="material-icons"></i>
                                <span>Sign in</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="myacount"
                                href="https://apollotran.com/demo/at_auros/en/my-account"
                                title="My account"
                                rel="nofollow"
                              >
                                <i className="material-icons"></i>
                                <span>My account</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="checkout"
                                href="//apollotran.com/demo/at_auros/en/cart?action=show"
                                title="Checkout"
                                rel="nofollow"
                              >
                                <i className="material-icons"></i>
                                <span>Checkout</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="ap-btn-wishlist dropdown-item"
                                href="//apollotran.com/demo/at_auros/en/module/leofeature/mywishlist"
                                title="Wishlist"
                                rel="nofollow"
                              >
                                <i className="material-icons"></i>
                                <span>Wishlist</span>
                                <span className="ap-total-wishlist ap-total" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="ap-btn-compare dropdown-item"
                                href="//apollotran.com/demo/at_auros/en/module/leofeature/productscompare"
                                title="Compare"
                                rel="nofollow"
                              >
                                <i className="material-icons"></i>
                                <span>Compare</span>
                                <span className="ap-total-compare ap-total" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Block languages module */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
