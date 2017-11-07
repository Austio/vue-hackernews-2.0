<template>
  <li>
    <strong v-if="primary">Office</strong>
  </li>
</template>

<script>
  export default {
    name: 'ErrorListItem',
    props: ['primary'],
  };
</script>
