<template>
    <div>
      <ul>
        <ErrorList
          :locations="locations"
        ></ErrorList>
      </ul>
    </div>
</template>

<script>
import ErrorList from './ErrorList.vue';

export default {
  name: 'error-example',
  data() {
    return {
      locations: [{
          "__typename": "Location",
          "id": "Location/24033af2-a10f-4e7e-bbfd-98caa1a154d1",
          "address_1": "12",
          "address_2": null,
          "zip_code": "65721",
          "phone_number": null,
          "phone_number_extension": "",
          "fax_number": null,
          "primary": null,
          "city": {
            "id": "City/333248",
            "name": "Finley",
            "__typename": "City"
          }
        },
          {
            "__typename": "Location",
            "id": "Location/dd9cd106-404e-4dab-bb46-a81304769250",
            "address_1": "adfasdfasdf",
            "address_2": null,
            "zip_code": "65721",
            "phone_number": "417-599-9993",
            "phone_number_extension": null,
            "fax_number": null,
            "primary": true,
            "city": {
              "id": "City/333248",
              "name": "Finley",
              "__typename": "City"
            }
          }
        ],
    };
  },

  title () {
    return this.user
      ? this.user.id
      : 'User not found'
  }
}
</script>
