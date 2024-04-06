/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'shark-labs.myshopify.com',
      storefrontAccessToken: '819d6782ed5a758683630608604b3234',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7246376272045',
        node: document.getElementById('product-component-1692036676256'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "padding": "15px 50px",
        "font-weight": "bold",
        "font-size": "21px",
        "color": "#f5f5f5",
        ":hover": {
          "color": "#f5f5f5",
          "background-color": "#ff0016"
        },
        "background-color": "#da000d",
        ":focus": {
          "background-color": "#ff0016"
        },
        "border-radius": "0px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Order Now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "color": "#f5f5f5",
        ":hover": {
          "color": "#f5f5f5",
          "background-color": "#ff0016"
        },
        "background-color": "#da000d",
        ":focus": {
          "background-color": "#ff0016"
        },
        "border-radius": "0px"
      }
    },
    "text": {
      "button": "Pre-Order Now"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "color": "#f5f5f5",
        ":hover": {
          "color": "#f5f5f5",
          "background-color": "#ff0016"
        },
        "background-color": "#da000d",
        ":focus": {
          "background-color": "#ff0016"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#f5f5f5"
      },
      "header": {
        "color": "#f5f5f5"
      },
      "lineItems": {
        "color": "#f5f5f5"
      },
      "subtotalText": {
        "color": "#f5f5f5"
      },
      "subtotal": {
        "color": "#f5f5f5"
      },
      "notice": {
        "color": "#f5f5f5"
      },
      "currency": {
        "color": "#f5f5f5"
      },
      "close": {
        "color": "#f5f5f5",
        ":hover": {
          "color": "#f5f5f5"
        }
      },
      "empty": {
        "color": "#f5f5f5"
      },
      "noteDescription": {
        "color": "#f5f5f5"
      },
      "discountText": {
        "color": "#f5f5f5"
      },
      "discountIcon": {
        "fill": "#f5f5f5"
      },
      "discountAmount": {
        "color": "#f5f5f5"
      },
      "cart": {
        "background-color": "#171717"
      },
      "footer": {
        "background-color": "#171717"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Pre-Order"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#da000d",
        ":hover": {
          "background-color": "#ff0016"
        },
        ":focus": {
          "background-color": "#ff0016"
        }
      },
      "count": {
        "color": "#f5f5f5",
        ":hover": {
          "color": "#f5f5f5"
        }
      },
      "iconPath": {
        "fill": "#f5f5f5"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f5f5f5"
      },
      "title": {
        "color": "#f5f5f5"
      },
      "price": {
        "color": "#f5f5f5"
      },
      "fullPrice": {
        "color": "#f5f5f5"
      },
      "discount": {
        "color": "#f5f5f5"
      },
      "discountIcon": {
        "fill": "#f5f5f5"
      },
      "quantity": {
        "color": "#f5f5f5"
      },
      "quantityIncrement": {
        "color": "#f5f5f5",
        "border-color": "#f5f5f5"
      },
      "quantityDecrement": {
        "color": "#f5f5f5",
        "border-color": "#f5f5f5"
      },
      "quantityInput": {
        "color": "#f5f5f5",
        "border-color": "#f5f5f5"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/