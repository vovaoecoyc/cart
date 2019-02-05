import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AppContext from './Context';
import Menu from './components/Header/Menu';

class App extends Component {
  state = {
    sale: {
      isApplySale: false,
      summSale: 0,
    },
    subMenu: {
      id: null,
      showSubMenu: false,
    },
    mobileMenuStatus: {
      showMobileMenu: false,
      openMobileMenu: false,
    },
    ...this.props.data,
  };
  getProductsQuantityInCart() {
    let quantity = 0,
      products = this.state.products;
    for (let i = 0; i < products.length; ++i) {
      quantity += products[i].quantity;
    }
    return quantity;
  }

  incrementProduct(id) {
    this.setState(prevState => {
      const newProducts = prevState.products.map((value, i) => {
        if (id === i) {
          value.quantity = ++value.quantity;
        }
        return value;
      });
      return { products: newProducts };
    });
  }

  decrementProduct(id) {
    this.setState(prevState => {
      const newProducts = prevState.products.map((value, i) => {
        if (id === i) {
          value.quantity = value.quantity === 0 ? 0 : --value.quantity;
          return value;
        }
        return value;
      });
      let newState = {};
      // убираем скидку, если сумма заказа меньше скидки либо равна 0
      if (this.getOrderSumm() > 0 && this.getOrderSumm() > this.state.sale.summSale) {
        newState = {
          products: newProducts,
        };
      } else {
        newState = {
          products: newProducts,
          sale: { isApplySale: false, summSale: 0 },
        };
      }

      return { ...newState };
    });
  }

  getOrderSumm() {
    let summ = 0;
    this.state.products.forEach(value => {
      summ += value.quantity * value.price;
    });
    return summ;
  }

  getOrderSummWithSale() {
    let summ = 0;
    summ = this.state.sale.isApplySale
      ? this.getOrderSumm() - this.state.sale.summSale
      : this.getOrderSumm();
    return summ;
  }

  applySale(summSale) {
    this.setState(prevState => ({ sale: { isApplySale: true, summSale: summSale } }));
  }

  removeProductFromCart(idProduct) {
    let summ = 0;
    const products = this.state.products.filter((value, i) => {
      if (+idProduct === i) {
        return false;
      }
      summ += value.price * value.quantity;
      return true;
    });
    let newState = {};
    // убираем скидку, если сумма заказа меньше скидки либо равна 0
    if (products.length > 0 && summ > 0 && summ > this.state.sale.summSale) {
      newState = {
        products: products,
      };
    } else {
      newState = {
        products: products,
        sale: {
          isApplySale: false,
          summSale: 0,
        },
      };
    }
    this.setState(prevState => ({ ...newState }));
  }

  changeStatusSubMenu(id) {
    const statusSubMenu = {
      id: id !== this.state.subMenu.id ? id : null,
      showSubMenu: id !== this.state.subMenu.id ? true : false,
    };
    this.setState(() => ({ subMenu: { ...statusSubMenu } }));
  }

  closeSubMenu() {
    const statusSubMenu = {
      id: null,
      showSubMenu: false,
    };
    this.setState(() => ({ subMenu: { ...statusSubMenu } }));
  }

  getIdActiveMenuItem() {
    return this.state.subMenu.id;
  }

  triggerOpenHamburgerMenu() {
    this.setState(prevState => {
      let newMobileMenuStatus = {
        showMobileMenu: prevState.mobileMenuStatus.showMobileMenu,
        openMobileMenu: !prevState.mobileMenuStatus.openMobileMenu,
      };
      return { ...prevState, mobileMenuStatus: newMobileMenuStatus };
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.screen.width <= 599 && !this.state.mobileMenuStatus.showMobileMenu) {
        this.setState(prevState => {
          let newMobileMenuStatus = {
            showMobileMenu: !prevState.mobileMenuStatus.showMobileMenu,
            openMobileMenu: prevState.mobileMenuStatus.openMobileMenu,
          };
          return { ...prevState, mobileMenuStatus: newMobileMenuStatus };
        });
      }

      if (window.screen.width > 599 && this.state.mobileMenuStatus.showMobileMenu) {
        this.setState(prevState => {
          let newMobileMenuStatus = {
            showMobileMenu: !prevState.mobileMenuStatus.showMobileMenu,
            openMobileMenu: prevState.mobileMenuStatus.openMobileMenu,
          };
          return { ...prevState, mobileMenuStatus: newMobileMenuStatus };
        });
      }
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          getProductsQuantityInCart: this.getProductsQuantityInCart.bind(this),
          incrementProduct: this.incrementProduct.bind(this),
          decrementProduct: this.decrementProduct.bind(this),
          getOrderSumm: this.getOrderSumm.bind(this),
          getOrderSummWithSale: this.getOrderSummWithSale.bind(this),
          applySale: this.applySale.bind(this),
          removeProductFromCart: this.removeProductFromCart.bind(this),
          changeStatusSubMenu: this.changeStatusSubMenu.bind(this),
          getIdActiveMenuItem: this.getIdActiveMenuItem.bind(this),
          triggerOpenHamburgerMenu: this.triggerOpenHamburgerMenu.bind(this),
          closeSubMenu: this.closeSubMenu.bind(this),
          ...this.state,
        }}
      >
        <div className="Container">
          {this.state.mobileMenuStatus.showMobileMenu &&
          this.state.mobileMenuStatus.openMobileMenu ? (
            <React.Fragment>
              <Menu />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Header />
              <Content />
              <Footer />
            </React.Fragment>
          )}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
