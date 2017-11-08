<template>
  <ul>
    <ErrorListItem
      :primary="item.primary"
      v-for="(item, index) in itemNodes"
      :key="index + '-' + item.id"
    >
    </ErrorListItem>
  </ul>
</template>

<script>
  import ErrorListItem from './ErrorListItem.vue';

  export default {
    name: 'ErrorList',
    components: {
      ErrorListItem,
    },
    data() {
      return {
        items: [
            {
              id: 1,
              primary: false,
            },
           {
             id: 2,
              primary: true,
            }
        ],
      };
    },
    computed: {
      itemNodes() {
        return this.items
          .sort((a, b) => a.primary < b.primary);
      },
    },
  };
</script>
