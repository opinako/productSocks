<template>
    <div>
        <div class="flex nav">
            <router-link to="/reviews">Reviews</router-link> /
            <router-link to="/makeAReviews">Make a Reviews</router-link> /
            <router-link to="/shipping">Shipping</router-link> /
            <router-link to="/details">Details</router-link>
        </div>
        <router-view />

    </div>
</template>
