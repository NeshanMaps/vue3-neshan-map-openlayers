<template>
  <Map
  mapKey="web.ApsMGWLRNZ6JAsKIKfVjhTfX5ojUSeSdk7kVuavm"
  serviceKey="service.iEBKgNGr3yicBeQgKhFKB187X3df2vFmqpOLM5GD"
  :center="{ latitude: 36.311559, longitude: 59.5870851}"
  poi
  traffic
  />
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'HomeView',
  components: {
    Map
  }
}
</script>
