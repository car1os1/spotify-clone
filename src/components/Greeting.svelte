<script lang="ts">
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting = "";
    if (currentHour < 12) {
        greeting = "Buenos dias";
    } else if (currentHour < 18) {
        greeting = "buenas tardes";
    } else {
        greeting = "buenas noches ";
    }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>
