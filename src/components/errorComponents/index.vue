<template>
  <ul>
    <LocationListItem
      :id="location.id"
      v-bind="location"
      v-for="(location, index) in locationNodes"
      :key="index + location.id"
    >
    </LocationListItem>
  </ul>
</template>

<script>
  import _get from 'lodash/get';
  import LocationListItem from './LocationListItem.vue';

  export default {
    name: 'ProfileLocationsSection',
    components: {
      LocationListItem,
    },
    data() {
      return {
        locations: [
            {
              id: "Location/3778652c-47d3-11e7-a1db-040180c64701",
              address_1: "264 Sepulveda Ct",
              address_2: null,
              zip_code: "95035",
              phone_number: "(408) 483-2368",
              phone_number_extension: "",
              fax_number: null,
              primary: null,
              city: {
                id: "City/128614",
                name: "Milpitas",
                description: "Milpitas, CA",
                country: {
                  id: "Country/237",
                  abbreviation: "US",
                  name: "United States",
                },
              },
            },
           {
             id: "Location/3c72dabf-47d3-11e7-a1db-040180c64701",
              address_1: "500 3rd St.",
              address_2: "510",
              zip_code: "94107",
              phone_number: null,
              phone_number_extension: "Qwer",
              fax_number: null,
              primary: true,
              city: {
                id: "City/128494",
                name: "San Francisco",
                description: "San Francisco, CA",
                country: {
                  id: "Country/237",
                  abbreviation: "US",
                  name: "United States",
                },
              },
            }
        ],
        profileEditable: false
      };
    },
    computed: {
      locationNodes() {
        return this.locations
          .sort((a, b) => a.primary < b.primary);
      },
    },
  };
</script>
