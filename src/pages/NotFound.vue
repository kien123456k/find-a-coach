<template>
  <section>
    <base-card>
      <h1 id="title">Page not found</h1>
      <p id="content">
        This page could not be found - Maybe check out all our coaches or
        requests
      </p>
      <div class="wrapper">
        <base-button link to="/coaches">Coaches</base-button>
        <base-button link to="/requests">Requests</base-button>
      </div>
    </base-card>
  </section>
</template>

<style scoped>
#title {
  text-align: center;
  font-size: 2rem;
}

#content {
  text-align: center;
  font-size: 1.25rem;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
