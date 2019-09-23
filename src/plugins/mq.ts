import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    'phone': 600,
    'tablet-portrait': 900,
    'tablet-landscape': 1200,
    'desktop': 1800,
    'large-desktop': Infinity
  }
})
