<template>
  <li
    data-test-location-list-item
  >
    <strong v-if='primary'>Office</strong>
    <span class="br contacts">
      <a
        v-if="hasGoogleMapLink"
        target="_blank"
        :href="googleMapLink">
        {{ address_1 }}<br>
        {{ address_2 }}<br v-show='address_2'>
        {{ city_state_zip_country }}<br>
        <template v-if='phone_number'>
          <span class='clabel'>Phone</span>
          {{ phone_number }}
          <span v-show='phone_number_extension'>x</span>{{ phone_number_extension }}
          <br>
        </template>
        <span class='clabel' v-show='fax_number'>Fax</span>{{ fax_number }}
      </a>
      <template v-else>
        {{ address_1 }}<br>
        {{ address_2 }}<br v-show='address_2'>
        {{ city_state_zip_country }}<br>
        <template v-if='phone_number'>
          <span class='clabel'>Phone</span>
          {{ phone_number }}
          <span v-show='phone_number_extension'>x</span>{{ phone_number_extension }}
          <br>
        </template>
        <span class='clabel' v-show='fax_number'>Fax</span>{{ fax_number }}
      </template>
    </span>
  </li>
</template>

<script>
  import _get from 'lodash/get';
  import _compact from 'lodash/compact';

  export default {
    inheritAttrs: false,
    props: {
      address_1: String,
      address_2: String,
      fax_number: String,
      phone_number: String,
      phone_number_extension: String,
      zip_code: String,
      city: Object,
      id: String,
      latitude: [String, Number],
      longitude: [String, Number],
      primary: Boolean,
    },
    computed: {
      countryAbbreviation() {
        return _get(this.city, 'country.abbreviation', null);
      },
      isUnitedStates() {
        return this.countryAbbreviation === 'US';
      },
      city_description() {
        return _get(this.city, 'description', null);
      },
      city_state_zip_country() {
        const fields = [this.city_description];
        if(this.isUnitedStates) {
          fields.push(this.zip_code);
        }

        return _compact(fields).join(' ');
      },
      googleMapLink() {
        return `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
      },
      hasGoogleMapLink() {
        return this.latitude && this.longitude;
      },
    },
  };
</script>
