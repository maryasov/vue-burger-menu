<template>
    <div>
        <Menu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot></slot>
            <template v-slot:icon>
                <slot name="icon"></slot>
            </template>
        </Menu>
    </div>
</template>

<script>
    import Menu from '../Menu';
    export default {
      name: 'slide',
      components: {
        Menu: Menu
      },
      methods: {
        openMenu() {
          this.$emit('openMenu');
        },
        closeMenu() {
          this.$emit('closeMenu');
        }
      }
    };
</script>


