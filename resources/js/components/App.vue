<template>
    <div>
        <div open="true" class="relative bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div class="flex  border-b-2 border-gray-100 py-6">
                    <div class="mx-auto ">
                        <router-link :to="{ name: 'welcome' }" class="button text-base font-medium text-gray-500 hover:text-gray-900 mx-2">Home</router-link>
                        <router-link :to="{ name: 'page' }" class="button text-base font-medium text-gray-500 hover:text-gray-900 mx-2" >Info</router-link>
                        <router-link :to="{ name: 'form' }" class="button text-base font-medium text-gray-500 hover:text-gray-900 mx-2" >Form</router-link>
                        <router-link :to="{ name: 'well' }" class="button text-base font-medium text-gray-500 hover:text-gray-900 mx-2" >WoS</router-link>
                    </div>

                </div>
            </div>
        </div>
        <main>
            <router-view></router-view>
        </main>
    </div>


</template>
<script>
export default {}
</script>
