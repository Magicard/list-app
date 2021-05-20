<template>
    <div class="w-100">
        <div class="text-6xl font-bold my-6 text-center">
            Form
        </div>
        <div class="bg-white shadow sm:rounded-lg w-1/2 h-100 p-4 border-2 mx-auto mt-5 overflow-auto grid-cols-1 grid-rows-6">
            <div class="flex flex-row">
                <div class="text-center text-xl text-gray-700 mt-5 w-1/3">Full Name:</div>
                <textarea name="name" id="name" rows="1" v-model="post.name" class="my-2 shadow sm:rounded-lg resize-none w-full mx-auto p-2" ></textarea>
            </div>
            <div class="flex flex-row">
                <div class="text-center text-xl text-gray-700 mt-5 w-1/3">Email:</div>
                <textarea name="email" id="email" rows="1" v-model="post.email" class="my-2 shadow sm:rounded-lg resize-none w-full mx-auto p-2" ></textarea>
            </div>
            <div class="flex flex-row">
                <div class="text-center text-xl text-gray-700 mt-5 w-1/3">Details:</div>
                <textarea name="details" id="details" v-model="post.content"  class="my-2 shadow sm:rounded-lg resize-none w-full mx-auto h-36 p-4"></textarea>
            </div>
            <button type="button" class="rounded-md bg-green-300 text-white px-6 py-3 w-full mt-2" @click="sendEmail" >Submit</button>

        </div>
    </div>
</template>

<script>
export default {
    name: "Form",
    data(){
        return {
            post:{
                name: null,
                email: null,
                content: null
            },
            posts: []
        }
    },
    methods: {
        sendEmail(){
            axios.post('/form',this.post)
            .then(rsp=>{
                console.log(rsp)
            })

        }
    }

}
</script>

<style scoped>

</style>
