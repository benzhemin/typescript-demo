class BirdWhisperer {
  chirping: string;

  constructor(message: string) {
    this.chirping = message;
  }

  chirp() {
    return 'Ah~ oh~ ' + this.chirping;
  }
}

let birdWhisperer = new BirdWhisperer('coo-coo-coo dd');
document.body.innerHTML = birdWhisperer.chirp();