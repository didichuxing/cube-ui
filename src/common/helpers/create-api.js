import { render, createVNode, mergeProps, camelize, h } from 'vue'

let seed = 0
const instances = []

const createComponent = (componentCtor, options, slots = null, context = null) => {
  let _options = options
  let _slots = slots ? slots(h) : null
  // todo slots
  const container = document ? document.createElement('div') : null
  const id = 'cube_create_component_' + seed++
  const vm = createVNode({
    render() {
      return createVNode(componentCtor, {
        ..._options,
        ref: '$cre'
      }, _slots)
    }
  }, { id })

  if (context) {
    vm.appContext = context
  }

  instances.push(vm)

  let $cre

  if (container) {
    // mounted component
    render(vm, container)

    $cre = vm.component.proxy.$refs['$cre']

    // add $remove
    $cre['$remove'] = function(cb) {
      render(null, container)
      componentCtor._instance = null
      cb && cb()

      if (container && document.body.contains(container)) {
        document.body.removeChild(container)
      }

      const idx = instances.findIndex(item => {
        const { id: _id } = item.props
        return id === _id
      })
      instances.splice(idx, 1)
    }

    // add $updateProps
    $cre['$updateProps'] = function(props, slots) {
      _options = {..._options, ...props}
      _slots = slots ? {...(_slots || {}), ...slots(h)} : null
      vm.component.proxy.$forceUpdate()
    }

    document.body.appendChild(container)
  }

  return $cre
}

export default function createAPI(app, Component, events, single) {
  app.config.globalProperties[`$create${camelize(Component.name.replace('cube-', '')).replace(/^\w/, ($) => $.toUpperCase())}`] = function(options, slots = null) {
    if (single && Component._instance) {
      if (options) {
        Component._instance.$updateProps(options, slots)
      }
      return Component._instance
    }
    const vm = Component._instance = createComponent(Component, options, slots, this ? this._.appContext : null)

    const parentVnodeProps = this ? this._.vnode.props : null
    if (parentVnodeProps) {
      this._.vnode.props = mergeProps(parentVnodeProps || {}, {
        onVnodeBeforeUnmount() {
          vm.$remove()
        }
      })
    }

    return vm
  }
}
