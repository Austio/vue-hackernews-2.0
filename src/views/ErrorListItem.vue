<template>
    <li>
        <small class="editlinks" v-show="profileEditable">
            <router-link
                    data-track-event="Edit My Profile"
                    data-track-data="{&quot;section&quot;:&quot;OfficeInfo&quot;,&quot;action&quot;:&quot;Edit&quot;}"
                    :to="{ name: 'profiles-locations-edit', params: { profileUUID: this.profileUUID, locationUUID: this.id} }"
            >
                <i class="icon-pencil"></i>
            </router-link>
        </small>
        <strong v-if='primary'>Office</strong>
        <span class="br contacts">
      <a
              v-if="hasGoogleMapLink"
              target="_blank"
              :href="googleMapLink">
        {{ address_1 }}<br>
        {{ address_2 }}<br v-show='address_2'>
        {{ city_name }}, {{ zip_code }}<br>
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
        {{ city_name }}, {{ zip_code }}<br>
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
  export default {
    props: {
      address_1: String,
      address_2: String,
      fax_number: String,
      phone_number: String,
      phone_number_extension: String,
      zip_code: String,
      city: Object,
      id: String,
      profileUUID: String,
      latitude: [String, Number],
      longitude: [String, Number],
      primary: Boolean,
      profileEditable: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      city_name() {
        return this.city.name;
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
