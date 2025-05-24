<template>
  <h1>Persons</h1>
  <div class="container-fluid">
    <persons-card-list :persons="this.persons"></persons-card-list>
  </div>
  <persons-create-form @created="addPerson"></persons-create-form>
</template>

<script>
import PersonsCardList from '@/components/PersonsCardList'
import PersonsCreateForm from '@/components/PersonsCreateForm'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Persons',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PersonsCardList,
    // eslint-disable-next-line vue/no-unused-components
    PersonsCreateForm
  },
  data () {
    return {
      persons: []
    }
  },
  /*
  data () {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      persons: [
        {
          id: 1,
          fistName: 'Arif',
          lastName: 'Wider',
          address: 'Treskowallee'
        },
        {
          id: 2,
          fistName: 'Lucas',
          lastName: 'Larisch',
          address: 'Treskowallee'
        }
      ]
    }
  },
   */
  methods: {
    getAvatar (person) {
      if (person.gender === 'MALE') {
        return require('../assets/male.png')
      } else if (person.gender === 'FEMALE') {
        return require('../assets/female.png')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/persons'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(person => {
        this.persons.push(person)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
