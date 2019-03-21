<template>
    <div class="crh-input container">
        <slot name="label"/>

        <!-- 3 or more if checks every call ? -->
        <!-- Maybe each input should be a separate component ? -->
        <text-input 
            :id="id" 
            v-if="type === 'text'" />
        <select-input 
            :id="id" 
            v-if="type === 'select'" />
        <checkbox-input 
            :id="id" 
            v-if="type === 'checkbox'" />
       
    </div>
</template>

<script>

import CheckboxInput from './components/CheckboxInput'
import TextInput from './components/TextInput'
import SelectInput from './components/SelectInput'

export default {
    data() {
        return {

        }
    },
    components: {
        CheckboxInput,
        TextInput,
        SelectInput,
    },
    props: [{
        /**
         * Defines which input type should be rendered
         * Could be a Number and possibly an enum for types.
         * Surely it could become messy but.. yolo.
         */
        type: {
            type: String,
            default: 'text',
        },
        id: {
            type: String,
            required: true,
        }
    }]
}
</script>

<style lang="sass" scoped>

</style>

