<template>
  <div class="image">
    <img src="../assets/logo.png" width="300" height="300"/>
  </div>
  <div class="dashboard">
    <div class="navbar">
      <h1>AWIKWOK Shortener Service</h1>
    </div>
    <div class="inputlink">
      <input type="text" placeholder="url"/>
      <button type="submit">Submit</button>
    </div>
    <table>
      <tr>
        <th><h2>Short Link</h2></th>
        <th><h2>Default Link</h2></th>
        <th><h2>Uses</h2></th>
      </tr>
      <tr>
        <td>AWIKWOK.wkwk</td>
        <td>youtube.com/watch?v=dQw4w9WgXcQ</td>
        <td>1</td>
      </tr>
    </table>
  </div>
</template>

<style>
  .navbar {
    display: flex;
  }
  td {
    margin-right: 10px;
    text-align: center;
  }
  .inputlink input {
    margin-right: 1rem;
  }
  .header {
    display: flex;
    grid: 2rem;
  }
  .tablecol {
    display: flex;
    grid: 2rem;
  }
</style>
