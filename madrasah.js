<script src="js/auth.js"></script>
<script>AuthAdmin.protect()</script>

<h1>ADMIN PORTAL MADRASAH</h1>

<button onclick="go('madrasah.html')">Profil Madrasah</button>
<button onclick="go('cbt.html')">Kelola CBT</button>
<button onclick="go('lms.html')">Kelola LMS</button>
<button onclick="go('spmb.html')">Data SPMB</button>

<button onclick="AuthAdmin.logout()">Logout</button>

<script>
function go(page){
  window.location.href = page;
}
</script>
