// @ts-nocheck
// Check if the user has previously saved cookie preferences
const savedCookiePrefs = localStorage.getItem("cookiePrefs");
let acceptedStrictlyNecessary = false;

// Function to show the cookie preferences modal
function showCookiePrefsModal() {
  //before opening we check if the user has already saved preferences
  // and we apply them to the checkboxes
  checkSavedCookiePrefs();

  const modal = document.getElementById("cookiePrefsModal");
  modal.showModal();
}

// Function to hide the cookie preferences modal
function hideCookiePrefsModal() {
  const modal = document.getElementById("cookiePrefsModal");
  modal.close();
}

// Function to save cookie preferences in localStorage
function saveCookiePreferences(preferences) {
  localStorage.setItem("cookiePrefs", JSON.stringify(preferences));

  if (!preferences.strictlyNecessary) {
    // Disable scripts if strictly necessary cookies are not accepted
    console.log(
      "Scripts are disabled because strictly necessary cookies are not accepted.",
    );
    window.location.reload();
  }

  // Hide the main cookie banner
  const mainCookieBanner = document.getElementById("cookieBanner");
  mainCookieBanner.style.display = "none";

  // Show the smaller banner at the bottom left corner if necessary cookies are accepted
  const smallerBanner = document.getElementById("smallerCookieBanner");
  if (preferences.strictlyNecessary) {
    smallerBanner.style.display = "block";
  }
}

// Function to accept all cookies
function acceptAllCookies() {
  const preferences = {
    strictlyNecessary: true,
    preferences: true,
    thirdParty: true,
  };

  acceptedStrictlyNecessary = true;
  saveCookiePreferences(preferences);
  savePrefsInModal(preferences);
  hideCookiePrefsModal();
}

// Event listener for "Cookie Preferences" link
const cookiePrefsLink = document.getElementById("cookiePrefsLink");
if (cookiePrefsLink) {
  cookiePrefsLink.addEventListener("click", (e) => {
    e.preventDefault();
    showCookiePrefsModal();
  });
}

// Event listener for "Cookie Preferences" link 2
const cookiePrefsLink2 = document.getElementById("cookiePrefsLink2");
if (cookiePrefsLink2) {
  cookiePrefsLink2.addEventListener("click", (e) => {
    e.preventDefault();
    showCookiePrefsModal();
  });
}

// Event listener for Close button in modal
const closeCookiePrefsModal = document.getElementById("closeCookiePrefsModal");
if (closeCookiePrefsModal) {
  closeCookiePrefsModal.addEventListener("click", () => {
    hideCookiePrefsModal();
  });
}

// Event listener for "Accept All" button
const acceptAllButton = document.getElementById("acceptAllButton");
if (acceptAllButton) {
  acceptAllButton.addEventListener("click", () => {
    acceptAllCookies();
  });
}

// Event listener for "Save Preferences" button
const saveCookiePrefsButton = document.getElementById("saveCookiePrefs");
if (saveCookiePrefsButton) {
  saveCookiePrefsButton.addEventListener("click", () => {
    // Get user preferences from the modal
    const preferences = {
      strictlyNecessary: document.getElementById("strictlyNecessaryCheckbox")
        .checked,
      preferences: document.getElementById("preferencesCheckbox").checked,
      thirdParty: document.getElementById("thirdPartyCheckbox").checked,
    };

    if (!preferences.strictlyNecessary) {
      // Disable scripts if strictly necessary cookies are not accepted
      console.log(
        "Scripts are disabled because strictly necessary cookies are not accepted.",
      );
    }

    // Save preferences and close modal
    saveCookiePreferences(preferences);
    hideCookiePrefsModal();
  });
}

// event listener for "strictlyNecessaryCheckbox"
// when the checkbox gets unchecked, the other checkboxes get unchecked too
const strictlyNecessaryCheckbox = document.getElementById(
  "strictlyNecessaryCheckbox",
);
strictlyNecessaryCheckbox.addEventListener("change", () => {
  if (!strictlyNecessaryCheckbox.checked) {
    document.getElementById("preferencesCheckbox").checked = false;
    document.getElementById("thirdPartyCheckbox").checked = false;
  }
});

const savePrefsInModal = (prefs) => {
  document.getElementById("strictlyNecessaryCheckbox").checked =
    prefs.strictlyNecessary;
  document.getElementById("preferencesCheckbox").checked = prefs.preferences;
  document.getElementById("thirdPartyCheckbox").checked = prefs.thirdParty;
};

const checkSavedCookiePrefs = () => {
  const savedCookiePrefs = localStorage.getItem("cookiePrefs");
  if (savedCookiePrefs) {
    const preferences = JSON.parse(savedCookiePrefs);
    // Apply saved preferences here (customize this part)
    document.getElementById("strictlyNecessaryCheckbox").checked =
      preferences.strictlyNecessary;
    document.getElementById("preferencesCheckbox").checked =
      preferences.preferences;
    document.getElementById("thirdPartyCheckbox").checked =
      preferences.thirdParty;

    acceptedStrictlyNecessary = preferences.strictlyNecessary;

    if (!acceptedStrictlyNecessary) {
      // Disable scripts if strictly necessary cookies are not accepted
      console.log(
        "Scripts are disabled because strictly necessary cookies are not accepted.",
      );
    } else {
      // Hide the main cookie banner
      const mainCookieBanner = document.getElementById("cookieBanner");
      mainCookieBanner.style.display = "none";

      // Show the smaller banner at the bottom left corner
      const smallerBanner = document.getElementById("smallerCookieBanner");
      smallerBanner.style.display = "block";
    }
  }
};

// Check if the user has previously saved preferences and apply them
if (savedCookiePrefs) {
  const preferences = JSON.parse(savedCookiePrefs);
  // Apply saved preferences here (customize this part)
  document.getElementById("strictlyNecessaryCheckbox").checked =
    preferences.strictlyNecessary;
  document.getElementById("preferencesCheckbox").checked =
    preferences.preferences;
  document.getElementById("thirdPartyCheckbox").checked =
    preferences.thirdParty;

  acceptedStrictlyNecessary = preferences.strictlyNecessary;

  if (!acceptedStrictlyNecessary) {
    // Disable scripts if strictly necessary cookies are not accepted
    console.log(
      "Scripts are disabled because strictly necessary cookies are not accepted.",
    );
  } else {
    // Hide the main cookie banner
    const mainCookieBanner = document.getElementById("cookieBanner");
    mainCookieBanner.style.display = "none";

    // Show the smaller banner at the bottom left corner
    const smallerBanner = document.getElementById("smallerCookieBanner");
    smallerBanner.style.display = "block";
  }
}
