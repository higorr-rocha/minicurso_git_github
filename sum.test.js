const sum = require('./sum');

if (sum(2, 3) === 5) {
  console.log('✅ Teste passou');
  process.exit(0);
} else {
  console.error('❌ Teste falhou');
  process.exit(1);
}