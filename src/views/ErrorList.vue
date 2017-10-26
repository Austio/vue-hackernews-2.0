<template>
    <div>
      <ErrorListItem
                    v-for="(location, index) in locations"
                    v-bind="location"
                    :key="index + location.id"
            >
            </ErrorListItem>
      <li>
                <router-link
                >
                    <i></i>
                    Add Location
                </router-link>
            </li>
    </div>
</template>

<script>
  export default {
    props: {
      locations: Array,
    }
  }

</script>
