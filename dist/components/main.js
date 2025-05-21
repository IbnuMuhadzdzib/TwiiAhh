 function active(element) {
    // Ubah gaya tab aktif
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('border-primary');
      btn.classList.add('border-black');
    });

    element.classList.remove('border-black');
    element.classList.add('border-primary');

    // Ubah konten tab
    const isForYou = element.textContent.trim() === "For You";
    document.getElementById("forYou").classList.toggle("hidden", !isForYou);
    document.getElementById("following").classList.toggle("hidden", isForYou);
  }

   let hasLiked = false;

  function toggleLike() {
    const likeSpan = document.getElementById("likeCount");
    const likeIcon = document.getElementById("likeIcon");
    const burst = document.getElementById("burst");

    let current = parseInt(likeSpan.innerText.replace(/,/g, ''));

    if (!hasLiked) {
      // LIKE
      current += 1;
      likeSpan.innerText = current.toLocaleString();
      likeIcon.classList.remove("fa-regular");
      likeIcon.classList.add("fa-solid", "text-primary");
      hasLiked = true;

      // Tampilkan efek burst
      burst.classList.remove("opacity-0", "scale-0");
      burst.classList.add("opacity-50", "scale-150");

      // Sembunyikan kembali efek burst setelah 300ms
      setTimeout(() => {
        burst.classList.add("opacity-0", "scale-0");
        burst.classList.remove("opacity-50", "scale-150");
      }, 300);
    } else {
      // UNLIKE
      current -= 1;
      likeSpan.innerText = current.toLocaleString();
      likeIcon.classList.remove("fa-solid", "text-primary");
      likeIcon.classList.add("fa-regular");
      hasLiked = false;
    }
  }

  let hasReposted = false;

  function toggleRepost() {
    const icon = document.getElementById("repostIcon");

    if (!hasReposted) {
      // Aktifkan repost
      icon.classList.remove("text-black");
      icon.classList.add("text-primary");
      hasReposted = true;
    } else {
      // Nonaktifkan repost
      icon.classList.remove("text-primary");
      icon.classList.add("text-black");
      hasReposted = false;
    }
  }
  
  let hasSaved = false;

  function toggleSave() {
    const save = document.getElementById("saveIcon");

    if (!hasSaved) {
      // Aktifkan repost
      save.classList.remove("fa-regular", "text-black");
      save.classList.add("fa-solid", "text-primary");
      hasSaved = true;
    } else {
      // Nonaktifkan repost
      save.classList.remove("fa-solid", "text-primary");
      save.classList.add("fa-regular","text-black");
      hasSaved = false;
    }
  }

  let isFollowed = false;

  function toggleFollow() {
    const btn = document.getElementById("followBtn");

    isFollowed = !isFollowed;

    if (isFollowed) {
      btn.textContent = "Followed";
      btn.classList.remove("text-secondary");
      btn.classList.add("text-primary");
    } else {
      btn.textContent = "Follow";
      btn.classList.remove("text-primary");
      btn.classList.add("text-secondary");
    }
  }

  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
      if (sidebar.classList.contains('w-96')) {
          sidebar.classList.remove('w-96');
          sidebar.classList.add('w-0');
      } else {
          sidebar.classList.add('w-96');
          sidebar.classList.remove('w-0');
      }
  });